import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks/reduxHooks";
import Portal from "../../layout/Portal";
import { getAlbums } from "../../store/reducers/ActonCreators";
import { albumsSelector, selectedUserSelector } from "../../store/selectors";
import AlbumItem from "./AlbumItem";
import "./styles.scss";

interface Props {
  userId: number | null;
  setUserId: React.Dispatch<React.SetStateAction<number | null>>;
}

const AlbumsModal = ({ userId, setUserId }: Props) => {
  const dispatch = useAppDispatch();
  const { albumList, isLoading, error } = useSelector(albumsSelector);
  const selectedUser = useSelector(selectedUserSelector(userId ?? -1));
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!userId) return;
    dispatch(getAlbums(userId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  useEffect(() => {
    function handleClickOutside(event: Event) {
      if (
        event.target &&
        ref.current &&
        !ref.current.contains(event.target as Node)
      ) {
        setUserId(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {userId && (
        <Portal>
          <div className="modal" ref={ref}>
            <div className="modal-title">{selectedUser?.name}'s albums</div>
            {isLoading ? (
              <>Loading...</>
            ) : (
              <>
                {error && <div>{error}</div>}
                {albumList.map((album) => (
                  <AlbumItem album={album} />
                ))}
              </>
            )}
          </div>
        </Portal>
      )}
    </>
  );
};

export default AlbumsModal;
