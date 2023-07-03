import { Button } from "@chakra-ui/react";
import { encode } from "bs58";
import { privateKeyAtom } from "../atoms";
import { useAtom } from "jotai";

const DownloadPrivateKeyButton = () => {

const [privateKey, setPrivateKeyAtom] = useAtom(privateKeyAtom);
  const handleDownload = () => {
    const base58Key = encode(privateKey);

    // Create a blob with the base58 key
    const blob = new Blob([base58Key], { type: "text/plain" });

    // Create a download link
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "private_key.txt";

    // Simulate a click event to trigger the download
    link.click();

    // Clean up the URL object
    URL.revokeObjectURL(url);
  };

  return (
    <Button onClick={handleDownload}>
      Download Private Key
    </Button>
  );
};

export default DownloadPrivateKeyButton;
