import AppLayout from "../components/AppLayout";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";
import Head from 'next/head';

const Profile =() =>{
    const followerList =[{nickname:'minja'},{nickname:'kiki'},{nickname:'meow'},{nickname:'nana'}]
    const followingList =[{nickname:'hana'},{nickname:'chocho'},{nickname:'nero'},{nickname:'ken'}]
    return (
        <AppLayout>
        <Head>
        <title>My Profile |NodeBird</title>
    </Head>
        <div>My profile</div>
        <NicknameEditForm/>
        <FollowList header="following list" data={followingList}/>
        <FollowList header="follower list" data={followerList}/>
        </AppLayout>


    )
}
export default Profile;