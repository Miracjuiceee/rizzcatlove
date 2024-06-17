import "./link.css";

function Link() {
  const Telegram = () => {
    window.location.href = "https://t.me/rizzctosolana";
  };

  const Twitter = () => {
    window.location.href = "https://x.com/RizzCatLOVE";
  };

  const DexScreener = () => {
    window.location.href =
      "https://dexscreener.com/solana/Rizz63Lw79uKZWSKRcCxrhZEA3MUQiy2MJ8GvYM2EQp";
  };

  const DexTool = () => {
    window.location.href =
      "https://www.dextools.io/app/en/solana/pair-explorer/CTDzaBqt6pPTfNvZa8uFTG5WXumJYme8RBEimyPPipft?t=1718638714510";
  };

  const BubbleMap = () => {
    window.location.href =
      "https://app.bubblemaps.io/sol/token/Rizz63Lw79uKZWSKRcCxrhZEA3MUQiy2MJ8GvYM2EQp";
  };

  return (
    <>
      <nav>
        <button onClick={DexScreener}>DexScreener</button>
        <button onClick={DexTool}>DexTool</button>
        <button onClick={Telegram}>Telegram</button>
        <button onClick={Twitter}>Twitter / X</button>
        <button onClick={BubbleMap}>BubbleMap</button>
      </nav>
    </>
  );
}

export default Link;
