import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TranslateContext } from "../context/TranslateContext";
import { getTranslate } from "../services/translate.service";

const LastPostsItem = ({ index, image, slug, title }: any) => {

    console.log(title)

    const [titleState, setTitle] = useState(title);
    const { translateState } = useContext(TranslateContext);

    useEffect(() => {
        if (translateState.language === 'en') {
            getTranslate(title).then((textTranslate: string) => {
                setTitle(textTranslate);
            });
        } else {
            setTitle(title);
        }
    }, [title, translateState]);

    return (
        <div
            key={index}
            className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl"
        >
            <img
                src={image}
                alt="art cover"
                loading="lazy"
                width="100"
                height="667"
                className="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"
            />
            <div className="sm:w-7/12 pl-0 p-5">
                <div className="space-y-2">
                    <div className="space-y-4">
                        <Link
                            to={"/blog/" + slug}
                            className="text-sm font-semibold text-cyan-900 break-all"
                        >
                            {titleState.toUpperCase()}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LastPostsItem;
