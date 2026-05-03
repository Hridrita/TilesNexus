import MyProfilePage from "@/components/MyProfile";

export const metadata = {
  title: "TileNexus - My Profile",
};

export default function MyProfile(){

    return (
        <div className="container mx-auto p-4 md:p-6 max-w-2xl">
            <MyProfilePage></MyProfilePage>
        </div>
    );
}


