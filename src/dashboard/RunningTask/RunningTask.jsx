import React, { useContext, useEffect, useState } from "react";
import CustomizedTables from "../../sharedComponent/Table/Table";
import { AuthContext } from "../../Providers/AuthProviders";
import axios from "axios";


const RunningTask = () => {
  const { user } = useContext(AuthContext);
  const [task, setTask] = useState([]);

  useEffect(() => {
    axios(`https://make-task-server.vercel.app/ongoing/${user?.email}`).then((res) => {
      setTask(res.data);
    });
  }, [user]);

  return (
    <div>
      <CustomizedTables task={task} setTask={setTask}></CustomizedTables>

    </div>
  );
};

export default RunningTask;