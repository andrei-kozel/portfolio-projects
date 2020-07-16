import { mount } from "@vue/test-utils";
import Twitter from "@/components/Twitter";

describe("Twitter", () => {
  const wrapper = mount(Twitter);
  wrapper.setData({ tweet: " ".repeat(444), tweets: ["Test tweet"] });

  it("Show error", () => {
    expect(wrapper.find(".error").exists()).toBe(true);
  });

  it("Render tweet", () => {
    expect(wrapper.find(".tweet").exists()).toBe(true);
  });

  it("Tweet message", () => {
    expect(wrapper.vm.$data.tweet).toBe(" ".repeat(444));
  });

  it("Add tweet by pressing enter button", () => {
    const wrapper = mount(Twitter);
    const input = wrapper.find('input[type="text"]');
    const button = wrapper.find("button");
    input.setValue("Test keyup trigger 1");
    button.trigger("keyup.enter");
    input.setValue("Test keyup trigger 2");
    button.trigger("keyup.enter");
    expect(wrapper.vm.$data.tweets.length).toBe(2);
  });

  it("Add tweet with mouse", () => {
    const wrapper = mount(Twitter);
    const input = wrapper.find('input[type="text"]');
    const button = wrapper.find("button");
    input.setValue("Test keyup trigger 1");
    button.trigger("click");
    input.setValue("Test keyup trigger 2");
    button.trigger("click");
    expect(wrapper.vm.$data.tweets.length).toBe(2);
  });
});
