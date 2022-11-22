import { useRouter } from 'next/router'

const DetailShoe = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <p> Post : {id}</p>
    )
}

export default DetailShoe