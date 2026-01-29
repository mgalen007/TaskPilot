function Comments({ userComments }) {
  if (!userComments || userComments.length === 0) return null;

  return (
    <div>
      <h2 className="font-bold text-lg px-6 mb-[1.5vh]">New comments ({userComments.length})</h2>
      <hr className="border-gray-300" />
      {userComments.map((userComment, idx) => (
        <div key={idx} className="relative">
          <Comment userComment={userComment} />
          <span className="absolute right-5 top-4 cursor-pointer hover:text-gray-500">&gt;</span>
          <hr className="border-gray-300"></hr>
        </div>
      ))}
    </div>
  );
}

function Comment({ userComment }) {
  return (
    <div className="py-2">
      <h3 className="font-bold px-6">{userComment.title}</h3>
      <p className="text-gray-500 overflow-hidden pl-6 pr-15 truncate">
        {userComment.details}
      </p>
    </div>
  );
}

export default Comments;
