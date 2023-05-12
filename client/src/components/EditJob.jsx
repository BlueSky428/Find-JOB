import { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";

import { Card, Input, Button, Typography } from "@material-tailwind/react";

const EditJob = () => {
  const { id } = useParams();
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [workLocation, setWorkLocation] = useState("");
  const [locationType, setLocationType] = useState("");
  const [navigate, setNavigate] = useState(false);

  useEffect(() => {
    getJob();
  }, []);

  const getJob = async () => {
    try {
      const response = await fetch(
        `https://job-portal-app-kzk0.onrender.com/job/${id}`
      );
      const jsonData = await response.json();
      const { company, position, workLocation, locationType } = jsonData.job;
      setCompany(company);
      setPosition(position);
      setWorkLocation(workLocation);
      setLocationType(locationType);
    } catch (err) {
      console.error(err.message);
    }
  };

  const editJob = async (e) => {
    e.preventDefault();
    try {
      const body = { company, position, workLocation, locationType };
      await fetch(`https://job-portal-app-kzk0.onrender.com/updateJob/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      setNavigate(true);
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleDelete = async () => {
    try {
      await fetch(`https://job-portal-app-kzk0.onrender.com/deleteJob/${id}`, {
        method: "DELETE",
      });
      setNavigate(true);
    } catch (err) {
      console.error(err.message);
    }
  };

  if (navigate) {
    return <Navigate to="/" />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center items-center min-h-[83vh] bg-gray-100"
    >
      <Card
        color="white"
        shadow={true}
        className="p-10 flex justify-center items-center"
      >
        <Typography variant="h4" color="blue-gray">
          Edit Job
        </Typography>

        <Typography color="gray" className="mt-1 font-normal">
          Change the details you want to edit.
        </Typography>
        <form
          onSubmit={editJob}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-4 flex flex-col gap-6">
            <Input
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              label="Company"
            />
            <Input
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              label="Position"
            />
            <Input
              value={workLocation}
              onChange={(e) => setWorkLocation(e.target.value)}
              label="workLocation"
            />
            <Input
              value={locationType}
              onChange={(e) => setLocationType(e.target.value)}
              label="locationType"
            />
          </div>
          <Button type="submit" className="mt-6" fullWidth>
            Edit
          </Button>
          <Button onClick={handleDelete} color="red" className="mt-6" fullWidth>
            Delete
          </Button>
        </form>
      </Card>
    </motion.div>
  );
};

export default EditJob;
