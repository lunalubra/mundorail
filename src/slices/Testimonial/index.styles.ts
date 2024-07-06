import styled from "styled-components";

export const TestimonialsContainer = styled.section`
  position: relative;
  width: 100%;
  height: 540px;
  color: white;
  margin-top: 110px;

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
  }
`;

export const Testimonials = styled.div`
  display: flex;
  gap: 42px;
  width: 100%;
  max-width: 1067px;
  overflow-x: hidden;
  scroll-behavior: smooth;
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
