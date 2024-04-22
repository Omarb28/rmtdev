import JobListItem from "./JobListItem";

export function JobList({ jobItems }) {
  return (
    <ul className="job-list">
      {jobItems.map((jobItem) => {
        return <JobListItem key={jobItem.id} jobItem={jobItem} />;
      })}
    </ul>
  );
}

export default JobList;
