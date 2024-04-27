import { TJobItem } from "../lib/types";
import JobListItem from "./JobListItem";
import Spinner from "./Spinner";

type JobListProps = {
  jobItems: TJobItem[];
  isLoadingList: boolean;
  activeJobId: number | null;
};

export function JobList({
  jobItems,
  isLoadingList,
  activeJobId,
}: JobListProps) {
  return (
    <ul className="job-list">
      {isLoadingList ? <Spinner /> : null}

      {!isLoadingList &&
        jobItems.map((jobItem) => {
          return (
            <JobListItem
              key={jobItem.id}
              jobItem={jobItem}
              isActive={jobItem.id === activeJobId}
            />
          );
        })}
    </ul>
  );
}

export default JobList;
