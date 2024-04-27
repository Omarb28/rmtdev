import { TJobItem } from "../lib/types";
import JobListItem from "./JobListItem";
import Spinner from "./Spinner";

type JobListProps = {
  jobItems: TJobItem[];
  isLoadingList: boolean;
};

export function JobList({ jobItems, isLoadingList }: JobListProps) {
  return (
    <ul className="job-list">
      {isLoadingList ? <Spinner /> : null}

      {!isLoadingList &&
        jobItems.map((jobItem) => {
          return <JobListItem key={jobItem.id} jobItem={jobItem} />;
        })}
    </ul>
  );
}

export default JobList;
