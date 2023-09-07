import { Avatar, AvatarFallback } from "./ui/avatar";

const CustomerFeed = () => {
  const customerFeeds = [
    { name: "John", feed: "Great service!", time: 20 },
    { name: "Alice", feed: "I love your products!", time: 30 },
    { name: "Bob", feed: "Could use some improvements.", time: 15 },
    { name: "Eva", feed: "Prompt delivery and excellent quality!", time: 25 },
  ];

  return (
    <div className="mt-2 flex flex-col  gap-2">
      {customerFeeds.map((feed, i) => {
        return (
          <div className="flex py-2 justify-between items-center bg-[#32363f] rounded ">
            <div key={i} className="p-4 flex items-center gap-4  flex-1">
              <Avatar>
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-bold">{feed.name}</p>
                <p className="text-[#B0CAD1]">{feed.feed}</p>
              </div>
            </div>
            <div className="px-8 ">
              <p className=" bg-[#2B2E36] rounded-full px-6 py-4">
                {feed.time} min Ago
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CustomerFeed;
