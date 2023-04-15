import React from "react";

type Props = {
  title: string;
  body?: string | React.ReactNode;
  image?: string;
  button?: string;
  sub?: string;
  centered?: boolean;
};

function Screen({ title, body, image, button, sub, centered }: Props) {
  return (
    <div className="card w-full bg-base-100 shadow-lg">
      {image &&
        <figure>
          <img
            src={image}
            alt="Shoes"
          />
        </figure>
      }
      <div className={`card-body ${centered && "text-center flex justify-center items-center"}`}>
        <h2 className="card-title">{title}</h2>
        {body && <div className={`text-gray-500`}>{body}</div>}
        {sub && <p className="text-gray-500">{sub}</p>}
        <div className="card-actions justify-end">
          {button && <button className="btn btn-primary">{button}</button>}
        </div>
      </div>
    </div>
  );
}

export default Screen;
