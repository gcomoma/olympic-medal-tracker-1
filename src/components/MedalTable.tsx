
import { useState } from 'react';
import { CountryMedals, SortField, SortOrder } from '@/types/medal';
import { MedalBadge } from './MedalBadge';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ArrowUpDown, ArrowUp, ArrowDown, Trophy } from 'lucide-react';

interface MedalTableProps {
  data: CountryMedals[];
}

export function MedalTable({ data }: MedalTableProps) {
  const [sortField, setSortField] = useState<SortField>('total');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('desc');
    }
  };

  const sortedData = [...data].sort((a, b) => {
    let aValue = a[sortField];
    let bValue = b[sortField];

    if (sortField === 'country') {
      aValue = a.country.toLowerCase();
      bValue = b.country.toLowerCase();
    }

    if (sortOrder === 'asc') {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field) return <ArrowUpDown className="h-4 w-4" />;
    return sortOrder === 'asc' ? (
      <ArrowUp className="h-4 w-4" />
    ) : (
      <ArrowDown className="h-4 w-4" />
    );
  };

  return (
    <Card className="w-full">
      <CardHeader className="border-b bg-muted/50">
        <div className="flex items-center gap-2">
          <Trophy className="h-6 w-6 text-gold" />
          <CardTitle className="text-2xl">Olympic Medal Standings</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/30 border-b">
              <tr>
                <th className="text-left p-4 font-semibold text-muted-foreground">Rank</th>
                <th className="text-left p-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleSort('country')}
                    className="font-semibold hover:bg-muted"
                  >
                    Country
                    <SortIcon field="country" />
                  </Button>
                </th>
                <th className="text-center p-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleSort('gold')}
                    className="font-semibold hover:bg-muted"
                  >
                    🥇 Gold
                    <SortIcon field="gold" />
                  </Button>
                </th>
                <th className="text-center p-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleSort('silver')}
                    className="font-semibold hover:bg-muted"
                  >
                    🥈 Silver
                    <SortIcon field="silver" />
                  </Button>
                </th>
                <th className="text-center p-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleSort('bronze')}
                    className="font-semibold hover:bg-muted"
                  >
                    🥉 Bronze
                    <SortIcon field="bronze" />
                  </Button>
                </th>
                <th className="text-center p-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleSort('total')}
                    className="font-semibold hover:bg-muted"
                  >
                    Total
                    <SortIcon field="total" />
                  </Button>
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedData.map((country, index) => (
                <tr
                  key={country.id}
                  className="border-b hover:bg-muted/20 transition-colors"
                >
                  <td className="p-4 font-bold text-muted-foreground">
                    {index + 1}
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{country.flag}</span>
                      <span className="font-semibold">{country.country}</span>
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <MedalBadge type="gold" count={country.gold} />
                  </td>
                  <td className="p-4 text-center">
                    <MedalBadge type="silver" count={country.silver} />
                  </td>
                  <td className="p-4 text-center">
                    <MedalBadge type="bronze" count={country.bronze} />
                  </td>
                  <td className="p-4 text-center">
                    <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                      {country.total}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}