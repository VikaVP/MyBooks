const ImageComponent = (props: Props) => {
    return (
        <img
            loading="lazy" src={props.data.cover}
            alt={props.data.title}
            onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src="https://www.nicepng.com/png/detail/990-9902953_error-icon-alert-vector-no-background.png";
            }}
        />
    )
};

export default ImageComponent;