import {
  CheckIcon,
  DocumentMagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import { useDispatch, useSelector } from 'react-redux';
import { updateStatus, userTasks } from '../../redux/features/tasks/tasksSlice';
import { useEffect, useState } from 'react';
import TaskDetailsModal from './TaskDetailsModal';

const MyTasks = () => {

  const { tasks, userSpecificTasks } = useSelector(state => state.tasksSlice)
  const { userName } = useSelector(state => state.userSlice)
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)
  const [taskId, setTaskId] = useState(0)
  const handleModal = (id) => {
    setTaskId(id)
    setIsOpen(!isOpen)
  }
  useEffect(() => {
    dispatch(userTasks(userName))
  }, [userName, dispatch, tasks])

  return (
    <div>
      <TaskDetailsModal isOpen={isOpen} setIsOpen={setIsOpen} id={taskId} />
      <h1 className="text-xl my-3">My Tasks</h1>
      <div className=" h-[750px] overflow-auto space-y-3">
        {userSpecificTasks?.map(item => <div
          key={item.id}
          className="bg-secondary/10 rounded-md p-3 flex justify-between"
        >
          <h1>{item.title}</h1>
          <div className="flex gap-3">
            <button onClick={() => handleModal(item.id)} className="grid place-content-center z-0" title="Details">
              <DocumentMagnifyingGlassIcon className="w-5 h-5 text-primary" />
            </button>
            <button onClick={() => {
              dispatch(updateStatus({ id: item.id, status: "done" }))
            }} className="grid place-content-center z-10" title="Done">
              <CheckIcon className="w-5 h-5 text-primary" />
            </button>
          </div>
        </div>)}
      </div>
    </div >
  );
};

export default MyTasks;
