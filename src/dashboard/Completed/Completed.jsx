import React, { useContext, useEffect, useState } from "react";
import CustomizedTables from "../../sharedComponent/Table/Table";
import { AuthContext } from "../../Providers/AuthProviders";
import axios from "axios";

const Completed = () => {
  const { user } = useContext(AuthContext);
  const [task, setTask] = useState([]);

  useEffect(() => {
    axios(`http://localhost:5000/task/${user?.email}`).then((res) => {
      setTask(res.data);
    });
  }, [user]);

  return (
    <div>
      <CustomizedTables task={task}></CustomizedTables>
    </div>
  );
};

export default Completed;
