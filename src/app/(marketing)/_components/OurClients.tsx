import Marquee from "@/components/ui/marquee";
import { cn } from "@/lib/utils";


const reviews = [
  {
    name: "Sophia Martinez",
    username: "Owner of Trendy Threads Boutique",
    body: "Parity Deals made setting up discounts so simple! Our sales increased by 25% within a month.",
    img: "https://storage.googleapis.com/pfpai/styles/574c62e5-0c3d-4e31-b49d-d9a4c8b07bc9.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=headshotpro-backend-production%40stockai-362303.iam.gserviceaccount.com%2F20241124%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241124T020132Z&X-Goog-Expires=518400&X-Goog-SignedHeaders=host&X-Goog-Signature=8bfbb07d56c5dcfd22643f766907fe25e9d9ae5d8b3b18e51ee465922effcd1066100024a13567cfe69f747b9ff23c2e2d268a411166643038897af59f5376c9b99a065e63b6f44c576846d6b0d53e3933c4832520dc1635a9a72d8514f9ef9c6acee6f1eb4c609b33ae3a271c3a10e05984365c4dcef066aca581ab35f3a91892288692dd34cbad72e9b222ed6a15ebd55b896ed978a1c94068a622f707c5177cffd4679a07ce618565f3a05a45328b729f9f6442bc3215e3234c12338231da4164d36d3aaae52267cf7d809b2dc9abbdab629626eb52c19bb12441a44b84ea66f47bdb297c90095560364a2d45693bb54cec852b1be5ec843e3045352e71be",
  },
  {
    name: "James Thompson",
    username: "Manager at Tech Haven",
    body: "The no-code platform is incredibly user-friendly, and our sales have grown by 30%!",
    img: "https://media.licdn.com/dms/image/v2/C4E03AQF9LgcK7Vh9ag/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1587520751741?e=2147483647&v=beta&t=WntmdrSH6icj6NmqZ5IqZjQ-YZF12CGRGONLBjLRHzc",
  },
  {
    name: "Aarav Patel ",
    username: "Co-founder of Gourmet Delights",
    body: "We saw a 40% boost in sales, thanks to how easy it is to manage deals with Discomfy!",
    img: "https://img.freepik.com/free-vector/profile-picture-template-design_742173-22027.jpg?semt=ais_hybrid",
  },
  {
    name: "Emily Carter",
    username: "Freelance Designer and Artist",
    body: "I created promotions effortlessly, and my store’s sales increased by 50% during the last campaign.",
    img: "https://imgv3.fotor.com/images/ai-headshot-generator/headshot-of-a-female-in-black-and-white-suit-with-curly-bobbed-hair.jpg",
  },
  {
    name: "Liam Nguyen",
    username: "Owner of FitPro Gear",
    body: "Setting up discounts took minutes, and my holiday sales jumped by 35% this year!",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE_Sr4IOi-djvsNNrU8YSToSS7X8S4brEum0aGGssrMSbql0KrrLFko3zpMn5QiSP3eiw&usqp=CAU",
  }
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-96 md:w-64 cursor-pointer md:overflow-hidden rounded-xl border p-4 mb-5",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2 p-6 md:p-0">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className=" text-lg md:text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-lg md:text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2  text-xl md:text-sm">{body}</blockquote>
    </figure>
  );
};

export function OurClients() {
  return (
    <div className="bg-slate-200 relative flex md:h-[500px] flex-col items-center justify-center overflow-hidden rounded-lg md:mx-20">
        <p className=" cursor-pointer  text-5xl md:text-6xl font-bold my-10 md:my-5 md:mb-10">What our customers say</p>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
