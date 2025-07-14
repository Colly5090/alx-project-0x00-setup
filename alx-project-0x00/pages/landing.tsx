import Button from "@/components/Button";
import Card from "@/components/Card";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <div className="space-x-2">
        <Button title="Login" styles="text-sm rounded-sm px-4 py-2" />
        <Button title="Sign Up" styles="text-base rounded-md px-6 py-3" />
        <Button title="Get Started" styles="text-lg rounded-full px-8 py-4" />
      </div>
    </div>
  )
}

export default Landing;