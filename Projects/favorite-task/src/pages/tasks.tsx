import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AddTaskModal } from "@/modules/tasks/AddTask";
import TaskCard from "@/modules/tasks/TaskCard";
import { selectTasks, updateFilter } from "@/redux/features/tasks/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";

export default function Tasks() {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector(selectTasks);

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1>Tasks</h1>
        <div className="flex items-center gap-5">
          <Tabs defaultValue="all" className="">
            <TabsList>
              <TabsTrigger
                onClick={() => dispatch(updateFilter("all"))}
                value="all"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                onClick={() => dispatch(updateFilter("low"))}
                value="low"
              >
                Low
              </TabsTrigger>
              <TabsTrigger
                onClick={() => dispatch(updateFilter("medium"))}
                value="medium"
              >
                Medium
              </TabsTrigger>
              <TabsTrigger
                onClick={() => dispatch(updateFilter("high"))}
                value="high"
              >
                High
              </TabsTrigger>
            </TabsList>
          </Tabs>

          {/* modal */}
          <AddTaskModal />
        </div>
      </div>
      <div className="space-y-5 mt-5">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
