type Image = {
    url: string,
    label: string
}

export type ImagesProps = {
    images: Image[]
}

export default function Images({ images }:ImagesProps) {
    return (
        <div className="max-w-[1200px] lg:mt-50 mb-40 flex flex-col mt-96 gap-20 items-center lg:flex-row h-80 mx-auto">
            {images.map(image => (
                <img className=" w-1/2 h-[450px] rounded-2xl" src={image.url} alt={image.label} />
            ))}
        </div>
    )
}