import Modal from 'react-modal';


function MovieModal(props) {
    const {isOpen,movie,closeModal} = props;
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, -50%)',
        },
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <div class='wrapper-modal'>
            <div>title:  {movie?.Title}</div>
                <hr />
             <div>description: {movie?.Plot}</div>
                <hr />
                <div>rating: {movie?.imdbRating}</div>
                <hr />
                <div>Actors: {movie?.Actors}</div>
                <hr />
                <div>Year: {movie?.Year}</div>
                <hr />
                <div>Country: {movie?.Country}</div>
                <hr />
            </div>

        </Modal>
    )
}

export default MovieModal