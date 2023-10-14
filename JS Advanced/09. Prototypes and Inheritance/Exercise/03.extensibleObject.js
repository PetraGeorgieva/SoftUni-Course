function extensibleObject() {
  let obj  = {
    extend: function (tempalate) {
      for (const parentProp of Object.keys(tempalate)) {
        const currentTemplateElement = tempalate[parentProp];
        if (typeof currentTemplateElement === "function") {
            const prot = Object.getPrototypeOf(obj)
           prot[parentProp] = currentTemplateElement;
        } else {
            obj[parentProp] = currentTemplateElement
        }
      }
    },
  };
  return obj;
}
const myObj = extensibleObject();

const template = {
  extensionMethod: function () {},
  extensionProperty: "someString",
};
myObj.extend(template);
