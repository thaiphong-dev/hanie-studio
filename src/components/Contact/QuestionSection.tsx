/* eslint-disable @typescript-eslint/no-explicit-any */

import { Form, Input, Button } from "antd/lib";
// import { InstagramOutlined, FacebookFilled } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
const QuestionSection = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Form Values:", values);
  };

  return (
    <div className="flex flex-col lg:flex-row max-w-[1240px] lg:space-x-[50px] space-y-[20px]">
      <div className="lg:w-1/2 space-y-[20px]  text-bg_dark">
        <h2 className=" text-[34px] text-bg_dark font-bold">
          Have a Question?
          <br />
          Contact Us!
        </h2>
        <p>
          We’re here to assist with any questions you may have about our
          services or products. Whether you’re seeking expert advice or specific
          information, our team is ready to provide the guidance you need. We
          look forward to hearing from you and helping you achieve your beauty
          goals with confidence!
        </p>
        <div className=" flex justify-start space-x-[10px] items-center">
          <p className="font-semibold">Our social media:</p>
          <div className="flex gap-2 ">
            <FontAwesomeIcon
              icon={faInstagramSquare}
              className="text-[20px] text-bg_dark"
            />
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-[20px] text-bg_dark"
            />
          </div>
        </div>
      </div>

      <div className="lg:w-1/2">
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input className="!h-[40px]" placeholder="Name" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Please enter a valid email",
              },
            ]}
          >
            <Input className="!h-[40px]" placeholder="Email (required)" />
          </Form.Item>
          <div className="flex w-full gap-2">
            <Form.Item className=" w-1/2" name="phone">
              <Input className="!h-[40px]" placeholder="Phone Number" />
            </Form.Item>
            <Form.Item className=" w-1/2" name="subject">
              <Input className="!h-[40px]" placeholder="Subject" />
            </Form.Item>
          </div>
          <Form.Item
            name="message"
            rules={[{ required: true, message: "Please enter your message" }]}
          >
            <Input.TextArea placeholder="Your Message (required)" rows={4} />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="cursor-pointer w-full h-fit !bg-active_main !border-active_main text-white !hover:bg-active_hover py-[3px] lg:py-[6px] px-[18px] text-[18px] font-[400] rounded-[5px]"
            >
              Send A Message
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default QuestionSection;
