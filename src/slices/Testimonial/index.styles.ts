import styled from "styled-components";

export const TestimonialsContainer = styled.section`
  position: relative;
  width: 100%;
  height: 540px;
  color: white;
  margin-top: 110px;
  @media only screen and (max-width: 768px) {
    padding-top: 72px;
    height: 700px;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: auto;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 46px;

  & > p:first-of-type  {
    all: unset;
    font-size: 48px;

    @media only screen and (max-width: 768px) {
      font-size: 32px;
      text-align: center;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 16px 0;
  }
`;

export const Testimonials = styled.div`
  display: flex;
  gap: 42px;
  width: 100%;
  max-width: 1067px;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 0 16px;
`;

export const Testimonial = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 22px;
  min-width: 512px;
  width: 512px;
  height: 235px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  text-align: center;

  .name {
    all: unset;
    font-size: 48px;
  }

  p:not(.name) {
    all: unset;
    font-size: 20px;
    line-height: 120%;
    strong {
      color: #27bd83;
    }
  }

  @media only screen and (max-width: 768px) {
    min-width: 275px;
    width: 275px;
    height: 352px;
    justify-content: space-around;

    .name {
      font-size: 38px;
    }
  }
`;

export const TestimonialsControllers = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
`;

export const TestimonialController = styled.div<{ $isActive: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 24px;
  background-color: ${(props) => (props.$isActive ? "#27bd83" : "#ffffff")};
`;
