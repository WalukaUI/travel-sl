import "./TopBar.css";
function TopBar() {
  return (
    <>
      <div className="topBar">
        <div className="topBarChild">
            <span class="material-symbols-outlined">phone_in_talk </span>&nbsp;&nbsp;
            <span> +94 776 500 723 </span>
        </div>
        <div className="topBarChild">
            <span class="material-symbols-outlined">location_on</span>&nbsp;&nbsp;
            <span>No 5 ,Thalammahara, Minuwangoda, Sri Lanka.</span>
        </div>
        <div className="topBarChild">
            <span class="material-symbols-outlined">mail</span>&nbsp;&nbsp;
            <span>Email</span>
        </div>
      </div>
    </>
  );
}
export default TopBar;
