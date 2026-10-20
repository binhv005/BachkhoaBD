import { Link } from 'react-router-dom';

// Link nội bộ ('/tin-tuc', '/#dang-ky') đi qua router; link ngoài, tel:, mailto: là thẻ <a> thường.
export default function SmartLink({ to, children, ...rest }) {
  if (/^(https?:|tel:|mailto:)/.test(to)) {
    return <a href={to} {...rest}>{children}</a>;
  }
  return <Link to={to} {...rest}>{children}</Link>;
}
