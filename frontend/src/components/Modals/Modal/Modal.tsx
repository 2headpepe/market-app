import "./Modal.css";
interface ModalProps {
  modal: boolean;
  setModal: Function;
  children: JSX.Element | JSX.Element[] | string;
  position?: {
    left?: string;
    right?: string;
    top?: string;
    bottom?: string;
    position?: "absolute";
  };
}

const Modal = ({ modal, setModal, children, position }: ModalProps) => {
  function onClick(event: React.MouseEvent) {
    if (
      event.target instanceof HTMLElement &&
      event.target.className === "Modal"
    ) {
      setModal(false);
    }
  }
  console.log(position);
  return (
    <div>
      {modal && (
        <div
          className="Modal"
          onClick={onClick}
        >
          <div
            className="Modal--content"
            style={{ ...position }}
          >
            {/* <h1 style={{ marginTop: "20px" }}>Your posts</h1> */}
            {children}
            {/* <PostList posts={data}></PostList> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
