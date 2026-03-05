
type ListParam = {
    description: string;
}


const List = (props: ListParam)=> {
    return <p>{props.description}</p>;
}

export default List;