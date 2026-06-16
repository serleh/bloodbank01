import { useState } from "react";
import donorService from "../services/donors";

export default function useDonorSearch() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [error, setError] = useState("");

  const search = async ({ city, bloodGroup }) => {
    try {
      setLoading(true);
      setError("");
      setHasSearched(true);

      const data = await donorService.search({ city, bloodGroup });
      

      setResults(data);
    } catch (err) {
      setError("Failed to fetch donors");
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return {
    results,
    loading,
    hasSearched,
    error,
    search,
  };
}