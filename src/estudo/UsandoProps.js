import CardUser from "./CardUser.js";
import  './UsandoProps.css'

const UsandoProps = () => {

    const users = [{
        id: 123,
        name: "Giovana",
        lastname: "Viana",
        avatar: "https://aventurebox.ninja/thumbor/28g96lgzJOgFas_JqkIcvM1wrR0=/50x0/center/middle/filters:no_upscale():no_upscale()/storage.googleapis.com/aventurebox-prod/uf/5cab40b7ca3f3/profile/61564b4e2a024-4.jpg",
        status: "Ocupado"
    },{
        id: 124,
        name: "Maria",
        lastname: "Eliane",
        avatar: "https://aventurebox.ninja/thumbor/28g96lgzJOgFas_JqkIcvM1wrR0=/50x0/center/middle/filters:no_upscale():no_upscale()/storage.googleapis.com/aventurebox-prod/uf/5cab40b7ca3f3/profile/61564b4e2a024-4.jpg",
        status: "Dirigindo"
    }]

    return(
        <div className="listausers">
            {users && 
                users.map(
                    (user) => {
                        return <CardUser key={user.id} {...user} />
                    }
                )
            }
        </div>
        
    )
}

export default UsandoProps;