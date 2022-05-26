const { useState } = React

function ImageUpload() {
    const [imageB64, setImageB64] = useState()

    const handleFileChange = event => {
        const file = event.target.files[0]

        const fileReader = new FileReader

        fileReader.readAsDataURL(file)

        // fileReader.addEventListener('load', event => {
        //     console.log(event.target.result)
        // })
        fileReader.onload = event => {
            //console.log(event.target.result)

            setImageB64(event.target.result)
        }
    }

    const handleFormSubmit = event => {
        event.preventDefault()

        alert('TODO via AJAX push image to server (e.g. POST, application/json, { "image": "data:image/jpeg;base64,asdfasdf..." })')
    }

    return <form onSubmit={handleFormSubmit}>
        <input type="file" name="image" onChange={handleFileChange} />

        {imageB64 && <img src={imageB64} />}
        
        <button>Upload</button>
    </form>
}

ReactDOM.render(<ImageUpload />, document.getElementById('root'))