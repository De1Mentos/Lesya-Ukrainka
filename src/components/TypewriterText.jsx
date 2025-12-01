import React, {useEffect, useState} from "react";

const TypewriterText = ({text, speed = 40}) => {
    const [displayed, setDisplayed] = useState("");

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setDisplayed(text.slice(0, i));
            i++;
            if (i > text.length) clearInterval(interval);
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed]);

    return (
        <pre
            style={{
                whiteSpace: "pre-wrap",
                fontFamily: "'Pacifico', cursive",
                fontSize: "22px",
                lineHeight: "1.8",
            }}
        >
      {displayed}
    </pre>
    );
};

export default TypewriterText;
