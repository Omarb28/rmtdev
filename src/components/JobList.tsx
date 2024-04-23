import JobListItem, { TJobItem } from "./JobListItem";

type JobListProps = {
  jobItems: TJobItem[];
};

export function JobList({ jobItems }: JobListProps) {
  return (
    <ul className="job-list">
      {jobItems.map((jobItem) => {
        return <JobListItem key={jobItem.id} jobItem={jobItem} />;
      })}
    </ul>
  );
}

export default JobList;
