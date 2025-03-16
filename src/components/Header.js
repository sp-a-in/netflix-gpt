import logoUrl from "./../assets/netflix.svg"

const Header = () => {
  return (
    <div className="absolute p-6 bg-gradient-to-b from-black z-10">
      <img src = {logoUrl} alt="My Happy SVG" className="w-48 custom-logo" />
    </div>
  )
}

export default Header;