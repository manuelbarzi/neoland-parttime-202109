import { MusicNoteIcon, VolumeUpIcon, BellIcon, LightBulbIcon, ShieldCheckIcon } from '@heroicons/react/solid'

export default function CartItem({ content }) {

    const features = {
        dj: <MusicNoteIcon className="h-6 w-6 text-blue-500" />,
        audio: <VolumeUpIcon className="h-6 w-6 text-blue-500" />,
        wc: <BellIcon className="h-6 w-6 text-blue-500" />,
        lights: <LightBulbIcon className="h-6 w-6 text-blue-500" />,
        security: <ShieldCheckIcon className="h-6 w-6 text-blue-500" />
    }

    return (
        <>
            <section>
                <img src={content.image} />
                <p>{content.title}</p>
                <p>{content.description}</p>
                <p>{content.price}</p>
                <p>{content.sizeDetail}</p>
                <p>{content.features}</p>
                {features ? features.map(feature => {
                    if(feature === 'dj') {
                        return <VolumeUpIcon className="h-5 w-5 text-blue-500" />
                    } else
                    return <LightBulbIcon className="h-5 w-5 text-blue-500" />
                }) : <span>Add</span>}
            </section>
        </>
    )
}