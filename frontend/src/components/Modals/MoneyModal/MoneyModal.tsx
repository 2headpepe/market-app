import { Button, Input, InputNumber, Select } from "antd";
import styles from "./MoneyModal.module.css";
import Modal from "../Modal/Modal";

const { Option } = Select;

interface MoneyModalProps {
  modal: boolean;
  setModal: Function;
}

const MoneyModal = (props: MoneyModalProps) => {
  const selectOperation = (
    <Select
      defaultValue="add"
      style={{ width: 60 }}
    >
      <Option value="add">+</Option>
      <Option value="minus">-</Option>
    </Select>
  );

  // function onClick(event: React.MouseEvent) {
  //   if (
  //     event.target instanceof HTMLElement &&
  //     event.target.className === "Modal"
  //   ) {
  //     setModal(false);
  //   }
  // }
  // return (
  //   <div className={styles.Modal}>
  //     <div className={styles.modalContent}>
  //       <InputNumber
  //         className={styles.input}
  //         addonBefore={selectOperation}
  //         defaultValue={100}
  //       />
  //       <div className={styles.buttonWrapper}>
  //         <Button type="primary">Apply</Button>
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <div>
      <Modal
        {...props}
        position={{ position: "absolute", right: "150px", top: "100px" }}
      >
        <InputNumber
          className={styles.input}
          addonBefore={selectOperation}
          defaultValue={100}
        />
        <div className={styles.buttonWrapper}>
          <Button type="primary">Apply</Button>
        </div>
      </Modal>
    </div>
  );
};

export default MoneyModal;
