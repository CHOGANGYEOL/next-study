import instance from "@/libs/axios/instance";

const example = () => {
  instance.get("/test");
};

const response = { example };

export default response;
