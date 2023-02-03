
import MainLayout from "../../layouts/MainLayout/MainLayout"
import MainBottomArea from "../../components/Global/MainBottomArea/MainBottomArea"
import MainTopArea from "../../components/Global/MainTopArea/MainTopArea"
import Users from "../../components/Users/Users"

const UsersView = () => {
    return(
        <MainLayout>
           
           <MainTopArea></MainTopArea>
        
        <MainBottomArea>

        <Users></Users>

        </MainBottomArea>


        </MainLayout>
    )
}

export default UsersView