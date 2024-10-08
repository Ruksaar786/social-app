import AddPost from "@/components/AddPost";
import Feed from "@/components/Feed";
import Stories from "@/components/Stories";
import RightMenu from "@/components/RightMenu/RightMenu";
import LeftMenu from "@/components/LeftMenu/LeftMenu";
export default function Home() {
  return (
    <div className="p-6 font-[family-name:var(--font-geist-sans)] flex gap-6">
      <div className="hidden xl:block w-[20%]">
        <LeftMenu />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <Stories />
          <AddPost />
          <Feed />
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightMenu />
      </div>
    </div>
  );
}
