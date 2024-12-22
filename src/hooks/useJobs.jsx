import React, { useEffect } from "react";

const useJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {}, []);

    return [jobs];
};

export default useJobs;
