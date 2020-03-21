import { BaseField } from "/app/common/formly-material/components/base-field/base-field.js";

const _TextField = async (res, rej) => {
  const tpl = await RawCMS.loadComponentTpl(
    "/app/common/formly-material/components/text-field/text-field.tpl.html"
  );

  res({
    mixins: [BaseField],
    template: tpl
  });
};

export const TextField = _TextField;
export default _TextField;