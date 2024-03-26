import { useParams } from 'react-router-dom';

export const ShowPerson = () => {
    const params = useParams();
    console.log(params);
    return <div>
        ID  { params.id }
    </div>
}