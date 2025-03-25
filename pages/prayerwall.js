import { db } from "@/firebase";

export default function PrayerWall() {
  const [requests, setRequests] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "prayers"), where("isPublic", "==", true));
    onSnapshot(q, (snapshot) => {
      setRequests(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div>
      <h3>Prayer Wall</h3>
      {requests.map((req) => (
        <div key={req.id} className="prayer-card">
          <p>{req.request}</p>
          <button onClick={() => alert("I prayed for this!")}>🙏 Pray</button>
        </div>
      ))}
    </div>
  );
}
