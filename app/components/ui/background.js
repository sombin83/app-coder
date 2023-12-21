import Image from "next/image";

const Background = () => {


    return (


        <div className="container m-auto">
            <Image
                src={"/imgs/todos.webp"}
                quality={50}
                alt="nuestros cafe"
                fill={true}
                layout={'fill'}
                className={'cover'}
                
            />
        </div>



    )

}

export default Background