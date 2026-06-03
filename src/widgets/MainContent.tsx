import { LatestUpdates } from "../features/latest-updates/LatestUpdates";
import { RightSidebar } from "../features/right-sidebar/RightSidebar";

export function MainContent() {
  return (
    <section className="max-w-[1170px] mx-auto mt-8 flex gap-6 items-start">
      <div className="flex-1">
        <LatestUpdates />
      </div>
      <RightSidebar />
    </section>
  );
}
