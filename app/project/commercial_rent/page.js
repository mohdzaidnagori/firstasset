import React from 'react'

const Commercial_rent = () => {
    const token = getToken('token')
    const router = useRouter()
    const getLoggedUserQuery = useGetLoggedUserQuery(token);

    useEffect(() => {
        if (getLoggedUserQuery.isError) {
            router.push('/')
        }
    }, [getLoggedUserQuery.isError])
    if (getLoggedUserQuery.isError) {
        return null;
    }
    return (
       <>
       {
        getLoggedUserQuery.isSuccess && 
        <div>Commercial_rent</div>
       }
       </>
    )
}

export default Commercial_rent