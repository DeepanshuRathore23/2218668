import axios from 'axios'

export async function Log(stack, level, pkg, msg, token) {
    try{
        const res = await axios.post('http://20.244.56.144/evaluation-service/logs', 
            {
                stack,
                level, 
                package: pkg, 
                msg, 
                token
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        console.log("Success", res.data);
    } catch(error) {
        console.log("Failed", error.message)
    }
}