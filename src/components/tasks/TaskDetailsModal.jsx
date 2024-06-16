import { useDispatch, useSelector } from "react-redux";
import Modal from "../ui/Modal";
import { useEffect } from "react";
import { userUniqueTask } from "../../redux/features/tasks/tasksSlice";

const TaskDetailsModal = ({ isOpen, setIsOpen, id }) => {
    const dispatch = useDispatch()
    const { singleTask } = useSelector(state => state.tasksSlice)

    useEffect(() => {
        dispatch(userUniqueTask(id))
    }, [dispatch, id])




    return <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={singleTask?.title}>
        <p>{singleTask?.description}</p>
    </Modal>
};

export default TaskDetailsModal;